package com.skilldistillery.mountains.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> {
		
		
}

