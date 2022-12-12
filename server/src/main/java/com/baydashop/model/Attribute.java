package com.baydashop.model;

import java.util.Set;

import javax.persistence.*;

enum AttrType {
    String,
    Number,
    NumberRange,
    Boolean
}

@Entity
@Table(name = "attributes")
public class Attribute {

  @Id
  @GeneratedValue
  private Long id;

  private String name;

  private String title;

  private AttrType type;

  @Column(name = "bool_description")
  private String boolDescription;

  @ManyToMany(mappedBy = "attributes")
  Set<Category> categories;




//   getters/setters
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

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public AttrType getType() {
    return type;
  }

  public void setType(AttrType type) {
    this.type = type;
  }

  public String getBoolDescription() {
    return boolDescription;
  }

  public void setBoolDescription(String boolDescription) {
    this.boolDescription = boolDescription;
  }

  public Set<Category> getCategories() {
    return categories;
  }

  public void setCategories(Set<Category> categories) {
    this.categories = categories;
  }
    
}
