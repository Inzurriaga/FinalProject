package com.skilldistillery.mountains.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.mountains.entities.ChatRoom;
import com.skilldistillery.mountains.services.ChatRoomService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4300" })
public class ChatRoomController {
	@Autowired
	private ChatRoomService srv;

	@GetMapping("chatroom/{id}")
	public ChatRoom retriveMessages(@PathVariable Integer id) {

		return null;
	}

}
