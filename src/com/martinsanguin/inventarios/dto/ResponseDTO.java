package com.martinsanguin.inventarios.dto;

import java.util.ArrayList;
import java.util.List;

public class ResponseDTO {
	private String title;
	private List<String> messages = new ArrayList<String>();
	private EnumResponseDTOLevel level = EnumResponseDTOLevel.ERROR;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}

	public List<String> getMessages() {
		return messages;
	}
	public void setMessages(List<String> messages) {
		this.messages = messages;
	}
	public EnumResponseDTOLevel getLevel() {
		return level;
	}
	public void setLevel(EnumResponseDTOLevel level) {
		this.level = level;
	}
	
	public ResponseDTO() {
		
	}
	
	public ResponseDTO(EnumResponseDTOLevel level) {
		super();
		this.title = "";
		this.messages = new ArrayList<String>();
		this.level = level;
	}
	
	public ResponseDTO(String title, List<String> messages, EnumResponseDTOLevel level) {
		super();
		this.title = title;
		this.messages = messages;
		this.level = level;
	}
	
	
	
}
