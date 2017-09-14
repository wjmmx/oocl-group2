package com.oocl.kb.model;

public class Court {
	private Long id;
	private Long locId;
	private int rate;
	private String courtName;
	private Long courtManager;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getLocId() {
		return locId;
	}
	public void setLocId(Long locId) {
		this.locId = locId;
	}
	public int getRate() {
		return rate;
	}
	public void setRate(int rate) {
		this.rate = rate;
	}
	public String getCourtName() {
		return courtName;
	}
	public void setCourtName(String courtName) {
		this.courtName = courtName;
	}
	public Long getCourtManager() {
		return courtManager;
	}
	public void setCourtManager(Long courtManager) {
		this.courtManager = courtManager;
	}
}
