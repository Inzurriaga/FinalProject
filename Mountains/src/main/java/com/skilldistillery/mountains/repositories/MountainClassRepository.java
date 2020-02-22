package com.skilldistillery.mountains.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.mountains.entities.MountainClass;

public interface MountainClassRepository extends JpaRepository<MountainClass, Integer> {

}
