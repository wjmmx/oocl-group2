package com.oocl.kb.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.oocl.kb.model.User;
import com.oocl.kb.svc.inf.UserSVC;

@RestController
public class UserController {

	 @Autowired(required = true)
	private UserSVC userSVC;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public @ResponseBody int loginUser(@RequestParam("username") String username,
			@RequestParam("password") String password, HttpServletRequest request) {
		return 0;
	}

}
