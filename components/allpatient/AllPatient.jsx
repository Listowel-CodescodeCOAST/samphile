import React from "react";
import Link from "next/link";
import styles from "../allpatient/AllPatient.module.css";

const AllPatient = () => {
  return (
    <div className={styles.table_container}>
      <table border="1px">
        <tr>
          <th>Patient's Name</th>
          <th>Medical Records</th>
          <th>Id Number</th>
        </tr>
        <tr>
          <td className={styles.td}>Otu James Jark</td>
          <td className={styles.td}>
            <details>
              <summary>Otu James Jark</summary>
              <p>
                "Registrar&apos;s Name": "Lord James Wright", <br />
                "Registrar&apos;s Email": "mocahey0@gizmodo.com",
                <br /> "phone": "578-451-4627",
                <br /> "Title": "Nullam sit amet turpis elementum ligula
                vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis
                justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id
                nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id,
                luctus nec, molestie sed, justo. Pellentesque viverra pede ac
                diam. Cras pellentesque volutpat dui.", <br /> "message": "Nulla
                mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi
                at nibh. In hac habitasse platea dictumst." Thu May 19 2022
                10:48:42 GMT+0000 (Greenwich Mean Time) <br /> Hospitial: Gary
                Marvin Kotwi Kumasi
              </p>
              <p>
                "Registrar&apos;s Name": "Muffin Filinkov", <br />
                "Registrar'&apos; Email": "mfilinkov9@canalblog.com", <br />
                "phone": "278-571-2916", <br />
                "Title": "Sed ante. Vivamus tortor. Duis mattis egestas
                metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor
                convallis. Nulla neque libero, convallis eget, eleifend luctus,
                ultricies eu, nibh.\n\nQuisque id justo sit amet sapien
                dignissim vestibulum. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; Nulla dapibus
                dolor vel est. Donec odio justo, sollicitudin ut, suscipit a,
                feugiat et, eros.", <br /> "message": "Curabitur gravida nisi at
                nibh. In hac habitasse platea dictumst. Aliquam augue quam,
                sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer
                tincidunt ante vel ipsum. Praesent blandit lacinia erat.
                Vestibulum sed magna at nunc commodo placerat. Praesent blandit.
                Nam nulla." <br /> Thu May 19 2022 10:48:42 GMT+0000 (Greenwich
                Mean Time) <br /> Hospitial: 37 M Hospital
              </p>
              <p>
                "Registrar&apos;s Name": "Lynn Lukes", <br /> "Registrar&apos;s
                Email": "llukes8@4shared.com", <br /> "phone": "568-490-6388",{" "}
                <br />
                "recodTitle": "Nulla ut erat id mauris vulputate elementum.
                Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi
                vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus
                vel nulla eget eros elementum pellentesque.", <br /> "message":
                "Vivamus metus arcu, adipiscing molestie, hendrerit at,
                vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.
                Donec quis orci eget orci vehicula condimentum. Curabitur in
                libero ut massa volutpat convallis." <br /> Thu May 19 2022
                10:48:42 GMT+0000 (Greenwich Mean Time)
                <br /> Hospitial: Gary Marvin Kotwi Kumasi
              </p>
              <p>
                "Registrar&apos;s Name": "Harrie Bottomley", <br />{" "}
                "Registrar&apos;s Email": "hbottomley7@taobao.com", <br />{" "}
                "phone": "532-514-1522", <br /> "Title": "Praesent blandit. Nam
                nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus
                vel, pede.", <br /> "message": "Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Proin interdum mauris non ligula
                pellentesque ultrices. Phasellus id sapien in sapien iaculis
                congue." <br /> Thu May 19 2022 10:48:42 GMT+0000 (Greenwich
                Mean Time)
                <br /> Hospitial: Gary Marvin Kotwi Kumasi
              </p>
              <Link href="/registrar/allpatients/addrecords">Add Record</Link>
            </details>
          </td>
          <td className={styles.td}>37GR161736B</td>
        </tr>
        <tr>
          <td className={styles.td}>Dawn O'Crevy</td>
          <td className={styles.td}>
            <details>
              <summary>Dawn O'Crevy</summary>
              <p>
                "Registrar&apos;s Name": "Willams Gray", "Registrar&apos;s
                Email": "docrevy1@trellian.com", "phone": "865-339-6539",
                "Title": "Proin eu mi. Nulla ac enim. In tempor, turpis nec
                euismod scelerisque, quam turpis adipiscing lorem, vitae mattis
                nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at
                turpis a pede posuere nonummy. Integer non velit.", "message":
                "Mauris lacinia sapien quis libero. Nullam sit amet turpis
                elementum ligula vehicula consequat. Morbi a ipsum. Integer a
                nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis
                tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum
                id, luctus nec, molestie sed, justo." Thu May 19 2022 10:48:42
                GMT+0000 (Greenwich Mean Time)
              </p>
              <Link href="/registrar/allpatients/addrecords">Add Record</Link>
            </details>
          </td>
          <td className={styles.td}>37GR253876B</td>
        </tr>
        <tr>
          <td className={styles.td}>Mark Jude</td>
          <td className={styles.td}>
            <details>
              <summary>Mark Jude</summary>
              <p>
                "Registrar&apos;s Name": "Melicent Purselowe", "Registrar&apos;s
                Email": "mpurselowe2@squidoo.com", "phone": "638-564-3614",
                "Title": "Maecenas ut massa quis augue luctus tincidunt. Nulla
                mollis molestie lorem. Quisque ut erat.", "message": "Quisque id
                justo sit amet sapien dignissim vestibulum. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Nulla dapibus dolor vel est. Donec odio justo,
                sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est
                lacinia nisi venenatis tristique. Fusce congue, diam id ornare
                imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed
                augue. Aliquam erat volutpat." Thu May 19 2022 10:48:42 GMT+0000
                (Greenwich Mean Time)
              </p>
              <p>
                "Registrar&apos;s Name": "Suzi Noonan", "Registrar&apos;s
                Email": "snoonan6@mozilla.org", "phone": "568-942-5765",
                "Title": "Cras mi pede, malesuada in, imperdiet et, commodo
                vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor
                sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris
                non ligula pellentesque ultrices. Phasellus id sapien in sapien
                iaculis congue. Vivamus metus arcu, adipiscing molestie,
                hendrerit at, vulputate vitae, nisl.", "message": "Quisque erat
                eros, viverra eget, congue eget, semper rutrum, nulla. Nunc
                purus." Thu May 19 2022 10:48:42 GMT+0000 (Greenwich Mean Time)
              </p>
              <Link href="/registrar/allpatients/addrecords">Add Record</Link>
            </details>
          </td>
          <td className={styles.td}>37GR157386B</td>
        </tr>
        <tr>
          <td className={styles.td}>Ga-degro Monos</td>
          <td className={styles.td}>
            <details>
              <summary>Ga-degro Monos</summary>
              <p>
                "Registrar&apos;s Name": "Mar Bonallack", "Registrar&apos;s
                Email": "mbonallack3@naver.com", "phone": "824-345-7586",
                "Registrar's Title": "In quis justo. Maecenas rhoncus aliquam
                lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas
                leo odio, condimentum id, luctus nec, molestie sed, justo.
                Pellentesque viverra pede ac diam. Cras pellentesque volutpat
                dui.\n\nMaecenas tristique, est et tempus semper, est quam
                pharetra magna, ac consequat metus sapien ut nunc. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Mauris viverra diam vitae quam. Suspendisse
                potenti.", "message": "Curabitur at ipsum ac tellus semper
                interdum. Thu May 19 2022 10:48:42 GMT+0000 (Greenwich Mean
                Time)
              </p>
              <Link href="/registrar/allpatients/addrecords">Add Record</Link>
            </details>
          </td>
          <td className={styles.td}>37GR376526B</td>
        </tr>
        <tr>
          <td className={styles.td}>Hallt CHEMBLE</td>
          <td className={styles.td}>
            <details>
              <summary>Hallt Chembal</summary>
              <p>
                "Registrar&apos;s Name": "Consalve Hallt", "Registrar&apos;s
                Email": "challt4@xinhuanet.com", "phone": "845-755-5526",
                "Title": "Sed sagittis. Nam congue, risus semper porta volutpat,
                quam pede lobortis ligula, sit amet eleifend pede libero quis
                orci. Nullam molestie nibh in lectus.", "message": "Quisque ut
                erat." Thu May 19 2022 10:48:42 GMT+0000 (Greenwich Mean Time)
              </p>
              <Link href="/registrar/allpatients/addrecords">Add Record</Link>
            </details>
          </td>
          <td className={styles.td}>37GR212336B</td>
        </tr>
        <tr>
          <td className={styles.td}>Kofi JAY</td>
          <td className={styles.td}>
            <details>
              <summary>Mark JOHN</summary>
              <p>
                "Registrar&apos;s Name": "Freddie Leifer", "Registrar&apos;s
                Email": "fleifer5@npr.org", "phone": "553-973-4012",
                "recodTitle": "In congue. Etiam justo. Etiam pretium iaculis
                justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus
                cursus urna. Ut tellus.", "message": "Etiam justo. Etiam pretium
                iaculis justo. In hac habitasse platea dictumst. Etiam faucibus
                cursus urna. Ut tellus. Nulla ut erat id mauris vulputate
                elementum. Nullam varius. Nulla facilisi. Cras non velit nec
                nisi vulputate nonummy. Maecenas tincidunt lacus at velit." Thu
                May 19 2022 10:48:42 GMT+0000 (Greenwich Mean Time)
              </p>
              <Link href="/registrar/allpatients/addrecords">Add Record</Link>
            </details>
          </td>
          <td className={styles.td}>37GR176516B</td>
        </tr>
      </table>
    </div>
  );
};

export default AllPatient;
