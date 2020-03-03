package com.skilldistillery.mountains.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {
	List<Event> findByUsers_UsernameAndCompleted(String username, boolean available);
	List<Event> findByHost_UsernameAndCompleted(String username, boolean available);
	List<Event> findByCompleted(Boolean available);
}
