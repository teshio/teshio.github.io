---
title: Contact
layout: page
permalink: contact
---

<form action="https://formspree.io/teshio@hotmail.com" method="POST">
  <input type="hidden" name="_next" value="{{site.url}}/thankyou"/>
  <input type="text" name="name" placeholder="your name"><br>  
  <input type="email" name="_replyto" placeholder="your email"><br>
  Message<br>
  <textarea name="message" rows="10" cols="100"></textarea><br>
  <input type="submit" value="Send">
</form>
