package com.skilldistillery.mountains.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.skilldistillery.mountains.entities.ChatRoom;
import com.skilldistillery.mountains.repositories.ChatRoomRepository;

public class ChatRoomServiceImpl implements ChatRoomService {

	@Autowired
	private ChatRoomRepository repo;

	@Override
	public ChatRoom getChatRoom(int id) {
		Optional<ChatRoom> chatOpt = repo.findById(id);

		if (chatOpt.isPresent()) {
			return chatOpt.get();
		}
		return null;
	}

}
