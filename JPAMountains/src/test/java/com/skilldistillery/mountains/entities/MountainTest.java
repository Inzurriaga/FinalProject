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

class MountainTest {
	private static EntityManagerFactory emf;
	private EntityManager em;

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
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
	}

	@Test
	void test() {
		Mountain mt = em.find(Mountain.class, 1);
		assertEquals("pikes peak", mt.getName());
		
	}
	
	@Test

	void test2() {
		Mountain mt = em.find(Mountain.class, 1);
		assertEquals(4, mt.getEvents().size());
		
	}
	@Test
	void test3() {
		Mountain mt = em.find(Mountain.class, 1);
		assertEquals("Colorado", mt.getState().getName());
		
	}

}
