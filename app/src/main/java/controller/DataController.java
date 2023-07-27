package com.folder.app.controller;

@RestController
public class DataController {

    @GetMapping("/")
    public String Home() {
        return "Data 준비중..."
    }
}