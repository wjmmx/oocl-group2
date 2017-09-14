package com.oocl.kb.model;

public class ConfirmedSchedule {
	private Long id;
	private Long scheduleId;
	private String fromHour;
	private String toHour;
	private Long reservationId;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getScheduleId() {
		return scheduleId;
	}
	public void setScheduleId(Long scheduleId) {
		this.scheduleId = scheduleId;
	}
	public String getFromHour() {
		return fromHour;
	}
	public void setFromHour(String fromHour) {
		this.fromHour = fromHour;
	}
	public String getToHour() {
		return toHour;
	}
	public void setToHour(String toHour) {
		this.toHour = toHour;
	}
	public Long getReservationId() {
		return reservationId;
	}
	public void setReservationId(Long reservationId) {
		this.reservationId = reservationId;
	}
}
