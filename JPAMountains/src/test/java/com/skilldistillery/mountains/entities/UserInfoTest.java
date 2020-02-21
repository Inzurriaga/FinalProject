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

class UserInfoTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private UserInfo userInfo;

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
		userInfo = em.find(UserInfo.class, 1);
		System.out.println(userInfo);
	}

	@AfterEach
	void tearDown() throws Exception {
		userInfo = null;

		em.close();
	}
	
	@Test
	void test1() {
		assertEquals("gabe@localhost.com",userInfo.getEmail());
		assertEquals("badguy",userInfo.getDescription());

	}

}
