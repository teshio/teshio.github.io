---
title: Contact
layout: page
permalink: contact
---

<form
  id="contactForm"
  action="https://formspree.io/teshio@hotmail.com"
  method="POST">
  <input type="hidden" name="_next" value="{{site.url}}/thankyou"/>

  <input type="text" name="name" placeholder="name" required minlength="3"><br>  

  <input type="email" name="_replyto" placeholder="email" required minlength="5" pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$"><br>
  Message<br>

  <textarea name="message" rows="10" cols="100" required></textarea><br>

  <input type="submit" value="Send">

</form>

<script>

</script>
