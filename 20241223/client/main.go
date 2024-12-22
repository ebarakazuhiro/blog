package main

import (
	"bufio"
	"fmt"
	"log"
	"os"

	"github.com/gorilla/websocket"
)

func main() {
	serverAddr := "ws://localhost:8080/ws"
	conn, _, err := websocket.DefaultDialer.Dial(serverAddr, nil)
	if err != nil {
		log.Fatalf("Failed to connect to server: %v", err)
	}
	defer conn.Close()

	go func() {
		for {
			var msg string
			err := conn.ReadJSON(&msg)
			if err != nil {
				log.Printf("Error reading message: %v", err)
				break
			}
			fmt.Println("Message:", msg)
		}
	}()

	scanner := bufio.NewScanner(os.Stdin)
	fmt.Println("Enter messages (type 'exit' to quit):")
	for scanner.Scan() {
		text := scanner.Text()
		if text == "exit" {
			break
		}
		err := conn.WriteJSON(text)
		if err != nil {
			log.Printf("Error sending message: %v", err)
			break
		}
	}
}
