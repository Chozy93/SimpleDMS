package com.example.simpledms.controller;

import com.example.simpledms.service.FaqService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;

/**
 * packageName : com.example.simpledms.controller
 * fileName : CustomerControllerTest
 * author : ds
 * date : 2022-11-11
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-11-11         ds          최초 생성
 */
@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = CustomerController.class)
class CustomerControllerTest {


    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FaqService faqService;

    ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void getCustomerAll() {
    }
}