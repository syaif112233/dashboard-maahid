import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, DollarSign, Calendar, UserCheck } from "lucide-react";

const Index = () => {
  const openSpreadsheet = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard Pesantren</h1>
          <p className="text-xl text-muted-foreground">Sistem Manajemen Data Santri dan Musyrif</p>
        </header>

        <div className="grid gap-6">
          {/* Input Absensi Musyrif */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Input Absensi Musyrif
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1YlMJhjkKW86xiPuM2WaTW7UVKi-ebTkU7E92seIpXTQ/edit?gid=583390075#gid=583390075')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Buka Spreadsheet Absensi Musyrif
              </Button>
            </CardContent>
          </Card>
          
          {/* Input Pelanggaran */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Input Pelanggaran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1aFAjYvhZzNIhNoMwmHzNilftRhdLV4T1elE4CuB4AuE/edit?gid=359005866#gid=359005866')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Buka Spreadsheet Pelanggaran
              </Button>
            </CardContent>
          </Card>

          {/* Input Absen Santri */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Input Absen Santri
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1z7yKm_S6wxqruND35x3V2SNYE6ddWFweKv702Kw0hiw/edit?usp=drive_link')}>7B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1oiqQPtLXq1kgZgp-GFos9VrYwUCUHQ2HrCEjToo2FcA/edit?usp=drive_link')}>7C</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1B0VxiymN8K8paVOhLTE2rfkwei8oR-RIhtmGv2hIYIY/edit?usp=drive_link')}>7E</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1tySPUgvvZ7dql9OvZCLeM6p2TN7CPo_nWJjTkOVAaGo/edit?usp=drive_link')}>7F</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1feVZg1tOVgHHGuDLJMYJR9xKyWYmGLPCachCaSPJNno/edit?usp=drive_link')}>8B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1oXsye89A0ovOBvYrnnk0iHuQo1ElJv5yriZPkzWNhOg/edit?usp=drive_link')}>8C</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1HC5L8su7x0rmRSTBEcLM6rbg22vL2CAGdEesrZf8Yqw/edit?usp=drive_link')}>8D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/15bD7enM2EsHhZn1FMJtVqzZ36WBmsscDqem3VTraJ8Q/edit?usp=drive_link')}>8G</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1ABnujGLw3zmJDxwdXjTwkho2-Ao6mbDM2DW9IMLIMa0/edit?usp=drive_link')}>8H</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1NHCThcUPBjSV6kcobYkeEm8RQ5XK0pIXMnpFaNekeN8/edit?usp=drive_link')}>9C</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1JWkVWCvcYI0uPA9loHEPNyhveOlfTjaOuvOYBKMCrwc/edit?usp=drive_link')}>9D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/11BJbecUD8q8GHfeDmepTDNfKh6demkG7rOSUKrUTupU/edit?usp=drive_link')}>9G</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1pLTkUqKmIBv7dPEvhtIlGx7JHsZKDR6zSqeTiJk96-U/edit?usp=drive_link')}>9H</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/11cNCEOqeWNa_IBN3a0T3A09Nr6kNTAqtvcP58m2a2Tk/edit?usp=drive_link')}>10A</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1kGpMX7IxicjQsrP-rWXDK6W_7uuv8JKDkULa9v7YZCc/edit?usp=drive_link')}>10B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1tVKLzBSXHnXqZRta9WjO2E5i5acgCFoKPJtp3hsnFkg/edit?usp=drive_link')}>10D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1KHum2MqsuihAHMz0JoXpV4tgghw3WIER3xER-6vh05Y/edit?usp=drive_link')}>10E</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1FmO4NiDXiuTTK2s4pdjBFR11w2mz6svoNcJTnlQpzkQ/edit?usp=drive_link')}>10F</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1kv6i0LyUBjUeDiPgzuzGxgQK1_bihpVAwQ3g7noiIXQ/edit?usp=drive_link')}>10H</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1H0Ft37cWa8qwEoXsKf2gylkZHjFwSSww71eLstj-0uM/edit?usp=drive_link')}>11B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1eOyCLO3YmRIEizl1xAlPfUHYPNaBdvIs1l5rxbv_eLs/edit?usp=drive_link')}>11C</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1wBP_o6onpBwFpJ7dmK9f5JHMK9gbBhZ4VZiUtSVUP2A/edit?usp=drive_link')}>11D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1qowA8pqFO85WUyiT9EQJl-JcKB6n021nfW6K05fOpjE/edit?usp=drive_link')}>11E</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1bFpbjoADzSTKz854RvVACe6yITN9Im9yORSSHp-YyDg/edit?usp=drive_link')}>11F</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/14Rj4zu4qMFvhEvewyDHacxOw8BOs8EWAAdVTtyDtqq4/edit?usp=drive_link')}>11G</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/19i1ZpE7BIE5C_vwlIIpPRdOvvVeqVAjToYJOZ20EZqg/edit?usp=drive_link')}>12A</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1YTHLboJQ6X2qwkf-Q4s-dVUP8ptToKHLqQMVtf-8VEU/edit?usp=drive_link')}>12B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1ccpEGkgRsvKv4ZiR8QpIXbRypjQZ9qzpBUYN9AY2Lxg/edit?usp=drive_link')}>12D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1rx16YhmOPiRDk4PjMCG71ShafGHvgljvvq8OTvp4y5I/edit?usp=drive_link')}>12F</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/15-8l67kpJSmIPIjTF-ign5BORQNZlVoVaSC9HQ4gReQ/edit?usp=drive_link')}>12G</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1WA24lBEok4DDyKJEUSQqsX2ajZhiy8Fzw-BGMJLwqQ0/edit?usp=drive_link')}>12H</Button>
              </div>
            </CardContent>
          </Card>

          {/* Database Pembayaran */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Database Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Button 
                onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1VSfZPdglealo4TnXFZSYfDrYrnVLzNvJWWYvGAFceB8/edit?usp=drive_link')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                MTs
              </Button>
              <Button 
                onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1NMVugj9kZyUNN8RCJpCvQRlIzxI2sBMnLYsYPUNn5Q8/edit?usp=drive_link')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                MA
              </Button>
            </CardContent>
          </Card>

          {/* Input dan Laporan Bulanan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Input dan Laporan Bulanan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1_gBxQM_ondI8Evlhsj_HD6EESf9zmpADYdsUppRnTqo/edit?usp=drive_link')}>7B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1dyY3IMGsUklibyFsOBY_R04D2i49MXBmPY7rq13RuyA/edit?usp=drive_link')}>7C</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1FBQAkfxpweLk8vswI_CyNVSceM7cQUJHyQ4c-u3jHNs/edit?usp=drive_link')}>7E</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1piCDIUSvXfAsC0BmtrrRN0lWnNJluxS98m7Me68mDag/edit?usp=drive_link')}>7F</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/16mshaHeL1myXawxU4VU6xW6isn0NYCtssJIwOfj4DXQ/edit?usp=drive_link')}>8B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/11TlZpZID19Vf7fPssKZuOUtHMeaEUHmCR15BzZfPSEw/edit?usp=drive_link')}>8C</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/11X9dlpfDWZGYNpnUBkhLA0gN7Nv6uSVIAuvskA9o5OM/edit?usp=drive_link')}>8D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1hmQnrzZhv0fYOpXV1oENJ8qjYOz43hD7P8Pyxrbea5Q/edit?usp=drive_link')}>8G</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1RXfYNslbuggbS8zNijs1KzSSsmC0Ovsk3VkHhMTkxq4/edit?usp=drive_link')}>8H</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1o7HVZZnWNt9tWLXC3bZAWlPmXJojrZYoj-2OLt9Bu2s/edit?usp=drive_link')}>9C</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/11B14vcRyJR9qhsaXIf1qUCNroJl86M4ntuNhEMX0nV0/edit?usp=drive_link')}>9D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/19Hg5U6Az5pa-iidEUjYIJiamB0W0QPhgDpWeix1hcTg/edit?usp=drive_link')}>9G</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1k-78z9tUzIQFcOFqJ7RyAA6L-4GPWV8DqLJEFQApVE8/edit?usp=drive_link')}>9H</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1wxGfix6z57KDVgUm1pu0habMCDstekHYtTk6i11zorY/edit?usp=drive_link')}>10A</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1XXohaSt6DTtIPN1L5zMasOUQiPoyQcB1xH5hwB-brTg/edit?usp=drive_link')}>10B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1eAEsBcW43AyyvUkfGiKWVZdY8RvjBFUMViloRmDOIPg/edit?usp=drive_link')}>10D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/14lcbLJTWgYU3k1XPU29q1EytlrkiPxlQdN4Tj7yI7cs/edit?usp=drive_link')}>10E</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/10jmAGRDgm1ealXH8AxuebLS_ElQLkd2lJoYZ6n9S4fc/edit?usp=drive_link')}>10F</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1fb9TpIVnkFYZo2xgG46gIcszu8OXvnkBY1WCQBSPDtE/edit?usp=drive_link')}>10H</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1nVq0I6z6alyA-y4tWtgRmgiSypA1XnYOFhsWWPGx6rQ/edit?usp=drive_link')}>11B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/16KYWeB3E_H-0b4WpdK0Dc6tCyUyqDVS6rOFFrk-Ea28/edit?usp=drive_link')}>11C</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1uLOHjT4qcNKxxjXjL_Q5EoAZ__e5c3ij74Tnh5njAY0/edit?usp=drive_link')}>11D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/16-kzOsns6YrdzUcyzGMmAdLb-77iZIIH2mcAppEom_I/edit?usp=drive_link')}>11E</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1xNQ0JIdb2GU7AwKTZIzQsHRZeN_5V_GwnLE3M1GT3-g/edit?usp=drive_link')}>11F</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1ZyJBWUPqUw-83U4Dg23Wb3hTk_f4TKNa-JmBskDznL4/edit?usp=drive_link')}>11G</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1DEgZ2yNa5gLQ5Q8zBbtZffuvvhFOuIOlOvbv_ldSTJc/edit?usp=drive_link')}>12A</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1PmtOnhzlIyzHmRr1JnpBe7xLvMukrkqiYxZNFL4sfE0/edit?usp=drive_link')}>12B</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1ibtU8To_abTNbSobFc_gGkSi8KwNZbp15w3P0BAohu0/edit?usp=drive_link')}>12D</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1ZF4FhQYw-OK4_ibUzuPNjiXrdbbRaJFKD4LDqwUdNk0/edit?usp=drive_link')}>12F</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/18ZYuMg7Lu5uL1y3ja6IJcl2-YRT2u5mP8CKw5srnUhY/edit?usp=drive_link')}>12G</Button>
                <Button variant="outline" onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1Q8hSy7CPZad56_eOtHGH8horvOk9H70jwWZYh93Eo14/edit?usp=drive_link')}>12H</Button>
              </div>
            </CardContent>
          </Card>

          {/* Input Absensi Musyrif */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Input Absensi Musyrif
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => openSpreadsheet('https://docs.google.com/spreadsheets/d/1YlMJhjkKW86xiPuM2WaTW7UVKi-ebTkU7E92seIpXTQ/edit?gid=583390075#gid=583390075')}
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Buka Spreadsheet Absensi Musyrif
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
