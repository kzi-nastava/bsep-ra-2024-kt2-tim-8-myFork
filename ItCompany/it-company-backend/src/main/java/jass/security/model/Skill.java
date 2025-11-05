package jass.security.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnTransformer;

import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Entity
public class Skill {
    @Id
    private UUID id;

    //Skripte se pokrecu za vreme reada i writea

    @Column(nullable = false)
    private String name;


   //Ima problema sa konvertovanjem integera (pratio sam errore dok nisam uboo, ne znam kako)

    @Column(nullable = false)
    private int level;
    @ManyToOne(fetch = FetchType.LAZY)
    private SoftwareEngineer swEngineer;
}
