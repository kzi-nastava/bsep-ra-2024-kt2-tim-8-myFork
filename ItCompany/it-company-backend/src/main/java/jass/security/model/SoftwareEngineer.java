package jass.security.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnTransformer;

import java.util.Date;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
public class SoftwareEngineer extends Employee {


    private Date dateOfEmployment;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "swEngineer")
    private Set<Skill> skills;
    @OneToOne
    private Cv cv;
}
