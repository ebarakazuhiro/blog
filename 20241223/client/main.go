package main

import (
	"bufio"
	"fmt"
	"log"
	"os"

	"github.com/gorilla/websocket"
)

// メッセージ構造体
type Message struct {
	Username string `json:"username"`
	Text     string `json:"text"`
}

func main() {
	serverAddr := "ws://localhost:8080/ws"
	conn, _, err := websocket.DefaultDialer.Dial(serverAddr, nil)
	if err != nil {
		log.Fatalf("Failed to connect to server: %v", err)
	}
	defer conn.Close()

	// ユーザー名を取得
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter your username: ")
	username, _ := reader.ReadString('\n')
	username = username[:len(username)-1] // 改行を削除

	// メッセージ受信のゴルーチン
	go func() {
		for {
			var msg Message
			err := conn.ReadJSON(&msg)
			if err != nil {
				log.Printf("Error reading message: %v", err)
				break
			}
			fmt.Printf("[%s]: %s\n", msg.Username, msg.Text)
		}
	}()

	// メッセージ送信ループ
	fmt.Println("Enter messages (type 'exit' to quit):")
	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		text := scanner.Text()
		if text == "exit" {
			break
		}

		msg := Message{
			Username: username,
			Text:     text,
		}
		err := conn.WriteJSON(msg)
		if err != nil {
			log.Printf("Error sending message: %v", err)
			break
		}
	}
}
