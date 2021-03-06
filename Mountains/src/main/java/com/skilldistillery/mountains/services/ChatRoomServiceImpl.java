package com.skilldistillery.mountains.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.ChatRoom;
import com.skilldistillery.mountains.entities.Event;
import com.skilldistillery.mountains.repositories.ChatRoomRepository;

@Service
public class ChatRoomServiceImpl implements ChatRoomService {

	@Autowired
	private ChatRoomRepository repo;

	@Override
	public ChatRoom getChatRoom(int id) {
		ChatRoom chat = repo.findByEvent_Id(id);
		return chat;
	}
	
	@Override
	public ChatRoom createEvent(ChatRoom chat) {
		chat = repo.saveAndFlush(chat);
		return chat;
	}

}
