package com.skilldistillery.mountains.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.ChatRoom;

public interface ChatRoomRepository extends JpaRepository<ChatRoom, Integer> {

}
