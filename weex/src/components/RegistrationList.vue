<template>
  <div class="registration__list">
    <registration-mail></registration-mail>
    <registration-twitter></registration-twitter>
    <registration-facebook></registration-facebook>
  </div>
</template>

<script>
import RegistrationMail from './RegistrationMail';
import RegistrationTwitter from './RegistrationTwitter';
import RegistrationFacebook from './RegistrationFacebook';

export default {
  name: 'registration-list',
  components: {
    RegistrationMail,
    RegistrationTwitter,
    RegistrationFacebook,
  },
};
</script>

<style scoped>
.registration__list {
  margin-bottom: 60px;
}
</style>
