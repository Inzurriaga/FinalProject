package com.skilldistillery.mountains.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.skilldistillery.mountains.entities.Message;
import com.skilldistillery.mountains.services.MessageService;

@Controller
public class MessageController {
	
	@Autowired
	private MessageService svc;

	@MessageMapping("/message")
	@SendTo("/server/message")
	public Message createMessage(Message message) throws Exception {
		System.out.println(message);
		return svc.createMessage(message);
	}
	


}
