package com.skilldistillery.mountains.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class StateTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private State state;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("MountainDB");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();

	}

	@BeforeEach
	void setUp() throws Exception {

		em = emf.createEntityManager();
		state = em.find(State.class, 1);
		System.out.println(state);
	}

	@AfterEach
	void tearDown() throws Exception {
		state = null;

		em.close();
	}
	
	@Test
	void test1() {
		assertEquals("Colorado",state.getName());
		assertEquals("CO",state.getAbbr());

	}

}
