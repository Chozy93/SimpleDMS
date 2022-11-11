package com.example.simpledms.controller;

import com.example.simpledms.model.Dept;
import com.example.simpledms.model.Faq;
import com.example.simpledms.service.DeptService;
import com.example.simpledms.service.FaqService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willDoNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * packageName : com.example.simpledms.controller
 * fileName : FaqControllerTest
 * author : ds
 * date : 2022-11-11
 * description :
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-11-11         ds          최초 생성
 */
@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = FaqController.class)
class FaqControllerTest {


    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FaqService faqService;

    ObjectMapper objectMapper = new ObjectMapper();

    @DisplayName("getFaqAll() : faq 전체 조회 함수 테스트")
    @Test
    void getFaqAll() throws Exception {

        List<Faq> list = new ArrayList<>();

        list.add(Faq.builder()
                .no(1)
                .title("test1")
                .content("test1")
                .build()
        );
        list.add(Faq.builder()
                .no(2)
                .title("test2")
                .content("test2")
                .build()
        );
        given(faqService.findAll())
                .willReturn(list);

        mockMvc.perform(get("/api/faq"))
                .andExpect(status().isOk())
                .andDo(print());
    }

    @DisplayName("findAllByTitle() : faq 제목 조회 함수 테스트")
    @Test
    void findAllByTitle() throws Exception {
        List<Faq> list = new ArrayList<>();

        list.add(Faq.builder()
                .no(1)
                .title("test1")
                .content("test1")
                .build()
        );
        given(faqService.findAllByTitle(anyString()))
                .willReturn(list);

        mockMvc.perform(get("/api/faq/test1"))
                .andExpect(status().isOk())
                .andDo(print());
    }
}