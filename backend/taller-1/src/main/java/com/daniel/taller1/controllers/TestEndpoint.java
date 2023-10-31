package com.daniel.taller1.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestEndpoint {

  @GetMapping("")
  @Operation(summary = "Test endpoint")
  @ApiResponse(responseCode = "200", description = "OK")
  public ResponseEntity<String> helloWorld() {
    return ResponseEntity.ok("Hello World!");
  }
}
