package com.baydashop.controller;

import com.baydashop.model.Category;
import com.baydashop.repository.CategoryRepository;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.Console;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("Category")
public class CategoryController {

  private final CategoryRepository repository;

  public CategoryController(CategoryRepository repository) {
    this.repository = repository;
  }

  /* @RequestMapping("")
  public List<Category> allEntities() {
  return repository.findAll();
  }

  @RequestMapping("{id}")
  public Category entity(@PathVariable("id") long id) {
    return repository.findById(id).orElse(null);
  } */

  @RequestMapping("byName/{name}")
  public Category entity(@PathVariable("name") String name) {
    Category probe = new Category();
    probe.setName(name);
    Example<Category> example = Example.of(probe);
    Optional<Category> respond = repository.findOne(example);

    if (respond.isPresent()) {
      return respond.get();
    } else {
      return null;
    }
  }

  @RequestMapping("byID/{Id}")
  public 
  Category entityById(@RequestParam("Id") long Id) {
    Category probe = new Category();
    probe.setId(Id);
    Example<Category> example = Example.of(probe);
    Optional<Category> respond = repository.findOne(example);
    
    if (respond.isPresent()) {
      return respond.get();
    } else {
      return null;
    }
  }

  @RequestMapping("byParentID/{parentId}")
  public List<Category> entitiesByParent(@RequestParam("parentId") long parentId) {
    Category probe = new Category();
    probe.setParentCategory(parentId);
    Example<Category> example = Example.of(probe);
    return repository.findAll(example);
  }
}
