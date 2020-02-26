package com.skilldistillery.mountains.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {
	List<Event> findByUsers_Username(String username);
}
