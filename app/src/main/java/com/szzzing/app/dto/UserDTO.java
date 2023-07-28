package com.szzzing.app.dto;

import java.security.Timestamp;

import lombok.Data;

@Data
public class UserDTO {
    private String id;
    private String pw;
    private String email;
    private Timestamp regDate;
    private Timestamp modDate;
}
