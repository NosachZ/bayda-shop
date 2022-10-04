package com.baydashop.controller;

import com.baydashop.model.Category;
import com.baydashop.repository.CategoryRepository;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("Category")
public class CategoryController {

  private final CategoryRepository repository;

  public CategoryController(CategoryRepository repository) {
    this.repository = repository;
  }

  // @RequestMapping("")
  // public List<Category> allEntities() {
  // return repository.findAll();
  // }

  // @RequestMapping("{id}")
  // public Category entity(@PathVariable("id") long id) {
  //   return repository.findById(id).orElse(null);
  // }

  @RequestMapping("{name}")
  public Category entity(@PathVariable("name") String name) {
    Category probe = new Category();
    probe.setName(name);
    Example<Category> example = Example.of(probe);
    List<Category> respond = repository.findAll(example);
    if (respond.isEmpty()) {
      return null;
    } else {
      return respond.get(0);
    }
  }

  @RequestMapping("")
  public List<Category> entitiesByParent(@RequestParam("parentId") long parentId) {
    Category probe = new Category();
    probe.setParentCategory(parentId);
    Example<Category> example = Example.of(probe);
    return repository.findAll(example);
  }
}
