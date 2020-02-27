package com.skilldistillery.mountains.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.Message;

public interface MessageRepository extends JpaRepository<Message, Integer>{

}
