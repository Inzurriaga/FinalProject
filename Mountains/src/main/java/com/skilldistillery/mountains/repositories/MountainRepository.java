package com.skilldistillery.mountains.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.Mountain;

public interface MountainRepository extends JpaRepository<Mountain, Integer> {
		
		
}

