package com.skilldistillery.mountains.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String message;

	@ManyToOne
	@JoinColumn(name = "chat_room_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private ChatRoom chatroom;
	
	@ManyToOne
	@JoinColumn(name= "user_id")
	private User user;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	
	public ChatRoom getChatroom() {
		return chatroom;
	}

	public void setChatroom(ChatRoom chatroom) {
		this.chatroom = chatroom;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Message [id=" + id + ", message=" + message + ", chatroom=" + chatroom + ", user=" + user + "]";
	}

}
