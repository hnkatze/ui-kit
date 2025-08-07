import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { Badge } from "primeng/badge";

interface Visit {
  id: string;
  clientName: string;
  address: string;
  phone: string;
  scheduledTime: string;
  status: 'pending' | 'in-progress' | 'completed';
  clientType: 'premium' | 'regular' | 'new';
  email?: string;
  contactPerson?: string;
  notes?: string;
  coordinates?: { lat: number; lng: number };
  // Campos adicionales para el detalle
  ruc?: string;
  website?: string;
  industry?: string;
  employees?: string;
  lastVisit?: string;
  totalPurchases?: string;
  creditLimit?: string;
  paymentTerms?: string;
}

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.page.html',
  styleUrls: ['./visit-detail.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    ChipModule,
    DividerModule,
    AvatarModule,
    Badge
]
})
export class VisitDetailPage implements OnInit {
  visit: Visit | null = null;
  visitId: string = '';

  statusLabels: any = {
    'completed': 'Completada',
    'in-progress': 'En Progreso',
    'pending': 'Pendiente'
  };

  clientTypeLabels: any = {
    'premium': 'Premium',
    'regular': 'Regular',
    'new': 'Nuevo'
  };

  // Datos mock extendidos
  visitDatabase: { [key: string]: Visit } = {
    '1': {
      id: '1',
      clientName: 'Supermercados La Colonia',
      address: 'Blvd. Morazán, frente a Plaza Miraflores, Tegucigalpa',
      phone: '2232-5800',
      scheduledTime: '09:00 AM',
      status: 'completed',
      clientType: 'premium',
      email: 'gerencia@lacolonia.hn',
      contactPerson: 'Lic. Carlos Mendoza',
      notes: 'Renovación de contrato anual de servicios',
      coordinates: { lat: 14.0818, lng: -87.2068 },
      ruc: '0801-1985-123456',
      website: 'www.lacolonia.hn',
      industry: 'Retail - Supermercados',
      employees: '500+',
      lastVisit: '15/11/2023',
      totalPurchases: 'L. 2,500,000',
      creditLimit: 'L. 500,000',
      paymentTerms: '30 días'
    },
    '2': {
      id: '2',
      clientName: 'Farmacia Kielsa',
      address: 'Col. Palmira, Ave. República de Argentina, Tegucigalpa',
      phone: '2235-6070',
      scheduledTime: '11:30 AM',
      status: 'in-progress',
      clientType: 'regular',
      email: 'info@kielsa.hn',
      contactPerson: 'Dra. María Fernández',
      ruc: '0801-1990-456789',
      website: 'www.kielsa.com',
      industry: 'Farmacéutica',
      employees: '100-250',
      lastVisit: '20/11/2023',
      totalPurchases: 'L. 850,000',
      creditLimit: 'L. 200,000',
      paymentTerms: '15 días'
    },
    '3': {
      id: '3',
      clientName: 'Café Copán Export',
      address: 'Barrio El Centro, 4ta Calle, San Pedro Sula',
      phone: '2550-1234',
      scheduledTime: '02:00 PM',
      status: 'pending',
      clientType: 'new',
      email: 'ventas@cafecopan.hn',
      contactPerson: 'Ing. Roberto García',
      notes: 'Primera visita - Presentación de catálogo de productos',
      ruc: '0501-2020-789012',
      industry: 'Exportación de Café',
      employees: '50-100',
      creditLimit: 'Por definir',
      paymentTerms: 'Por definir'
    },
    '4': {
      id: '4',
      clientName: 'Distribuidora El Ahorro',
      address: 'Col. Kennedy, Blvd. Kennedy, contiguo a Banco Atlántida, Tegucigalpa',
      phone: '2232-8900',
      scheduledTime: '04:30 PM',
      status: 'pending',
      clientType: 'premium',
      email: 'contacto@elahorro.hn',
      contactPerson: 'Licda. Ana Martínez',
      ruc: '0801-1995-345678',
      website: 'www.elahorro.hn',
      industry: 'Distribución',
      employees: '250-500',
      lastVisit: '01/12/2023',
      totalPurchases: 'L. 1,800,000',
      creditLimit: 'L. 400,000',
      paymentTerms: '45 días'
    },
    '5': {
      id: '5',
      clientName: 'Banco Atlántida',
      address: 'Plaza Bancatlan, Blvd. Centroamérica, Tegucigalpa',
      phone: '2280-1010',
      scheduledTime: '05:00 PM',
      status: 'pending',
      clientType: 'premium',
      email: 'servicioalcliente@bancatlan.hn',
      contactPerson: 'Lic. Juan Carlos López',
      notes: 'Reunión para discutir nuevos servicios financieros',
      ruc: '0801-1980-111222',
      website: 'www.bancatlan.hn',
      industry: 'Banca y Finanzas',
      employees: '1000+',
      lastVisit: '10/11/2023',
      totalPurchases: 'L. 5,000,000',
      creditLimit: 'L. 1,000,000',
      paymentTerms: '60 días'
    },
    '6': {
      id: '6',
      clientName: 'Diunsa',
      address: 'City Mall, Blvd. del Norte, San Pedro Sula',
      phone: '2545-4000',
      scheduledTime: '05:30 PM',
      status: 'pending',
      clientType: 'regular',
      email: 'ventas@diunsa.hn',
      contactPerson: 'Ing. Patricia Rodríguez',
      ruc: '0501-1985-555666',
      website: 'www.diunsa.com',
      industry: 'Retail - Tiendas por departamento',
      employees: '500+',
      lastVisit: '25/11/2023',
      totalPurchases: 'L. 3,200,000',
      creditLimit: 'L. 600,000',
      paymentTerms: '30 días'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.visitId = this.route.snapshot.paramMap.get('id') || '';

    // Primero intentar obtener los datos de navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['visit']) {
      this.visit = navigation.extras.state['visit'];
      // Enriquecer con datos adicionales
      if (this.visitId && this.visitDatabase[this.visitId]) {
        this.visit = { ...this.visit, ...this.visitDatabase[this.visitId] };
      }
    } else {
      // Si no hay datos de navegación, buscar en la "base de datos"
      this.loadVisitFromDatabase();
    }
  }

  loadVisitFromDatabase() {
    if (this.visitId && this.visitDatabase[this.visitId]) {
      this.visit = this.visitDatabase[this.visitId];
    }
  }

  getStatusColor(status: string): "info" | "success" | "warn" | "danger"  {
    switch(status) {
      case 'completed': return 'success';
      case 'in-progress': return 'warn';
      case 'pending': return 'info';
      default: return 'info';
    }
  }

  getClientTypeColor(type: string): string {
    switch(type) {
      case 'premium': return '#FFB800';
      case 'regular': return '#6C757D';
      case 'new': return '#28A745';
      default: return '#6C757D';
    }
  }

  goBack() {
    this.router.navigate(['/tabs/tab2']);
  }

  callClient() {
    if (this.visit?.phone) {
      window.location.href = `tel:${this.visit.phone}`;
    }
  }

  emailClient() {
    if (this.visit?.email) {
      window.location.href = `mailto:${this.visit.email}`;
    }
  }

  showMap() {
    if (this.visit?.coordinates) {
      const { lat, lng } = this.visit.coordinates;
      // Abrir en Google Maps
      window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
    }
  }

  completeVisit() {
    // Lógica para marcar la visita como completada
    console.log('Visita completada');
  }
}
