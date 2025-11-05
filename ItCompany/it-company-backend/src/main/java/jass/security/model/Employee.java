package jass.security.model;

import jakarta.persistence.*;
import jass.security.dto.employee.EmployeeProfileInfoDto;
import lombok.*;
import org.hibernate.annotations.ColumnTransformer;

import java.util.UUID;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@MappedSuperclass
public class Employee {
    @Id
    private UUID id;



    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Address address;

    @Column(nullable = false)
    private String phoneNumber;


    public void update(EmployeeProfileInfoDto dto) {
        setName(dto.getName());
        setSurname(dto.getSurname());
        setPhoneNumber(dto.getPhoneNumber());

        this.address.update(dto.getAddress());
    }
}





















