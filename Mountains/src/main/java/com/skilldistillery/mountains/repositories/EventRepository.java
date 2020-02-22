package com.skilldistillery.mountains.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.Event;

public interface EventRepository extends JpaRepository<Event, Integer> {

}
