package com.skilldistillery.mountains.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.State;

public interface StateRepository extends JpaRepository<State, Integer> {
		
		
}

