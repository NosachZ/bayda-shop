package com.baydashop.model;

import java.util.Set;

import javax.persistence.*;


@Entity
@Table(name = "attributes")
public class Attribute {

  @Id
  @GeneratedValue
  private Long id;

  private String name;

  private String title;

  @Enumerated(EnumType.STRING)
  private AttributeType type;
  

  @Column(name = "boolean_type_description")
  private String booleanTypeDescription;

  @ManyToMany(mappedBy = "attributes")
  private Set<Category> categories;

  @OneToMany(mappedBy = "attribute", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
  private Set<AttributeValue> values;




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

  public AttributeType getType() {
    return type;
  }

  public void setType(AttributeType type) {
    this.type = type;
  }

  public String getBooleanTypeDescription() {
    return booleanTypeDescription;
  }

  public void setbooleanTypeDescription(String booleanTypeDescription) {
    this.booleanTypeDescription = booleanTypeDescription;
  }

  /* public Set<Category> getCategories() {
    return categories;
  }

  public void setCategories(Set<Category> categories) {
    this.categories = categories;
  } */
    
}
