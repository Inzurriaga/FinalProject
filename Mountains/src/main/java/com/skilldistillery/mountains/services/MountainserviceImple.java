package com.skilldistillery.mountains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.Mountain;
import com.skilldistillery.mountains.repositories.MountainRepository;

@Service
public class MountainserviceImple implements MountainService {

	@Autowired
	private MountainRepository repo;

	@Override
	public Mountain findById(Integer id) {
		Optional<Mountain> op = repo.findById(id);
		if (op.isPresent()) {
			return op.get();
		}
		return null;
	}

	@Override
	public List<Mountain> showAllMountains() {
		return repo.findAll();
	}



}
