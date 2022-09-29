package com.baydashop.model;

import javax.persistence.*;

@Entity
@Table(name = "categories")
public class Category {

  @Id
  @GeneratedValue
  private Long id;

  private String name;

  @Column(name = "parent_category")
  private Long parentCategory;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Long getParentCategory() {
    return parentCategory;
  }

  public void setParentCategory(Long parentCategory) {
    this.parentCategory = parentCategory;
  }
}
