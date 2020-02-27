package com.skilldistillery.mountains.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.skilldistillery.mountains.entities.Message;

@Controller
public class MessageController {

	@MessageMapping("/message")
	@SendTo("/server/message")
	public Message message(Message message) throws Exception {
		System.out.println("hello world");
		System.out.println(message);
		Message newMessage = new Message();
		newMessage.setMessage("hello, its Erin");
		return newMessage;
	}

}
