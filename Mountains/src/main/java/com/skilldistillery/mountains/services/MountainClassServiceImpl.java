package com.skilldistillery.mountains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.MountainClass;
import com.skilldistillery.mountains.repositories.MountainClassRepository;

@Service
public class MountainClassServiceImpl implements MountainClassService {
	
	@Autowired
	private MountainClassRepository repo;

	@Override
	public MountainClass getMountainClassById(int id) {
		Optional<MountainClass> eventOpt = repo.findById(id);
		if(eventOpt.isPresent()) {
			return eventOpt.get();
		}
		return null;
	}

	@Override
	public List<MountainClass> getMountainClassList() {
		return repo.findAll();
	}
	
}
