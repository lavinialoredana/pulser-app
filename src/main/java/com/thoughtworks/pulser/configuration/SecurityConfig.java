package com.thoughtworks.pulser.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@EnableWebSecurity
@Configuration
public class SecurityConfig {

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurerAdapter() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/pulserfeed/message").allowedOrigins("http://localhost:3000");
      }
    };
  }

  @Bean
  public SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
    http.authorizeRequests()
        .anyRequest()
        .authenticated()
        .and()
        .httpBasic()
        .and()
        .csrf()
        .disable();
    return http.build();
  }

  @Bean
  public UserDetailsService userDetailsService() {
    UserDetails user = User
        .withUsername("user")
        .password(passwordEncoder().encode("password"))
        .roles("USER")
        .build();
    return new InMemoryUserDetailsManager(user);
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder(8);
  }

}