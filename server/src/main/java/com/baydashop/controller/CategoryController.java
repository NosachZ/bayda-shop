package com.baydashop.controller;

import com.baydashop.model.Category;
import com.baydashop.repository.CategoryRepository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("Category")
public class CategoryController {

  private final CategoryRepository repository;

  public CategoryController(CategoryRepository repository) {
    this.repository = repository;
  }

  @RequestMapping("all")
  public List<Category> allEntities() {
    return repository.findAll();
  }

  @RequestMapping("")
  public Category entityByName(@RequestParam("name") String name) {
    return repository.findByName(name);
  }

  @RequestMapping("{Id}")
  public Category entityById(@PathVariable("Id") long Id) {
    return repository.findById(Id).orElse(null);
  }

  @RequestMapping("{Id}/chain")
  public List<Category> chainEntities(@PathVariable("Id") long Id) {
    List<Category> chain = new ArrayList<>();
    Category curCategory = repository.findById(Id).orElse(null);
    chain.add(0, curCategory);
    while (curCategory.getParentCategory() != null) {
      curCategory = repository.findById(curCategory.getParentCategory()).orElse(null);
      chain.add(0, curCategory);
    }
    return chain;
  }

  @RequestMapping("root")
  public List<Category> entitiesByParentIdNull() {
    return repository.findByParentCategory(null);
  }

  @RequestMapping("{parentId}/children")
  public List<Category> entitiesByParent(@PathVariable("parentId") long parentId) {
    return repository.findByParentCategory(parentId);
  }


  /* @RequestMapping("byParentID/")
  public List<Category> entitiesByParentNull() {
    //  Category probe = new Category();
    
    // probe.setParentCategory(parentId);
    // Example<Category> example = Example.of(probe);
    // return repository.findAll(example);
    return repository.findByParentCategory(null);
  } */
  
}
