package com.skilldistillery.mountains.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.mountains.entities.State;
import com.skilldistillery.mountains.repositories.StateRepository;

@Service
public class StateserviceImple implements StateService {

	@Autowired
	private StateRepository repo;

	@Override
	public State findById(Integer id) {
		Optional<State> op = repo.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		return null;
	}

	@Override
	public List<State> findAll() {
		return repo.findAll();
	}

}
