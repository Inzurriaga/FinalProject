package com.skilldistillery.mountains.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.User;

public interface UserAuthRepository extends JpaRepository<User, Integer> {
	public Optional<User> findByUsername(String username);
}
