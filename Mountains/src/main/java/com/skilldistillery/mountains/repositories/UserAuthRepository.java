package com.skilldistillery.mountains.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.User;

public interface UserAuthRepository extends JpaRepository<User, Integer> {

}
