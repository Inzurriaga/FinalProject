package com.skilldistillery.mountains.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.Message;
import com.skilldistillery.mountains.repositories.MessageRepository;

@Service
public class MessageServiceImpl implements MessageService {
	
	@Autowired
	private MessageRepository repo;
	
	@Override
	public Message createMessage( Message message ) {
		message = repo.saveAndFlush(message);
		return message;
	}
	

}
