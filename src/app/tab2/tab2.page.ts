import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { ChipModule } from 'primeng/chip';

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
}

interface StatusLabel {
  [key: string]: string;
}

interface ClientTypeLabel {
  [key: string]: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    CardModule,
    ButtonModule,
    BadgeModule,
    RippleModule,
    AvatarModule,
    ChipModule
  ]
})
export class Tab2Page implements OnInit {
  todayVisits: Visit[] = [];
  currentTime = new Date();
  completedCount = 0;
  inProgressCount = 0;
  pendingCount = 0;

  statusLabels: StatusLabel = {
    'completed': 'Completada',
    'in-progress': 'En Progreso',
    'pending': 'Pendiente'
  };

  clientTypeLabels: ClientTypeLabel = {
    'premium': 'Premium',
    'regular': 'Regular',
    'new': 'Nuevo'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadTodayVisits();
    this.updateCounts();
    // Actualizar la hora cada minuto
    setInterval(() => {
      this.currentTime = new Date();
    }, 60000);
  }

  updateCounts() {
    this.completedCount = this.todayVisits.filter(v => v.status === 'completed').length;
    this.inProgressCount = this.todayVisits.filter(v => v.status === 'in-progress').length;
    this.pendingCount = this.todayVisits.filter(v => v.status === 'pending').length;
  }

  loadTodayVisits() {
    // Datos de ejemplo - en producción vendría de un servicio
    this.todayVisits = [
      {
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
        coordinates: { lat: 14.0818, lng: -87.2068 }
      },
      {
        id: '2',
        clientName: 'Farmacia Kielsa',
        address: 'Col. Palmira, Ave. República de Argentina, Tegucigalpa',
        phone: '2235-6070',
        scheduledTime: '11:30 AM',
        status: 'in-progress',
        clientType: 'regular',
        email: 'info@kielsa.hn',
        contactPerson: 'Dra. María Fernández'
      },
      {
        id: '3',
        clientName: 'Café Copán Export',
        address: 'Barrio El Centro, 4ta Calle, San Pedro Sula',
        phone: '2550-1234',
        scheduledTime: '02:00 PM',
        status: 'pending',
        clientType: 'new',
        email: 'ventas@cafecopan.hn',
        contactPerson: 'Ing. Roberto García',
        notes: 'Primera visita - Presentación de catálogo de productos'
      },
      {
        id: '4',
        clientName: 'Distribuidora El Ahorro',
        address: 'Col. Kennedy, Blvd. Kennedy, contiguo a Banco Atlántida, Tegucigalpa',
        phone: '2232-8900',
        scheduledTime: '04:30 PM',
        status: 'pending',
        clientType: 'premium',
        email: 'contacto@elahorro.hn',
        contactPerson: 'Licda. Ana Martínez'
      },
      {
        id: '5',
        clientName: 'Banco Atlántida',
        address: 'Plaza Bancatlan, Blvd. Centroamérica, Tegucigalpa',
        phone: '2280-1010',
        scheduledTime: '05:00 PM',
        status: 'pending',
        clientType: 'premium',
        email: 'servicioalcliente@bancatlan.hn',
        contactPerson: 'Lic. Juan Carlos López',
        notes: 'Reunión para discutir nuevos servicios financieros'
      },
      {
        id: '6',
        clientName: 'Diunsa',
        address: 'City Mall, Blvd. del Norte, San Pedro Sula',
        phone: '2545-4000',
        scheduledTime: '05:30 PM',
        status: 'pending',
        clientType: 'regular',
        email: 'ventas@diunsa.hn',
        contactPerson: 'Ing. Patricia Rodríguez'
      }
    ];
    this.updateCounts();
  }

  getStatusColor(status: string): 'success' | 'warn' | 'info' | 'danger' | 'secondary' | 'contrast' {
    switch(status) {
      case 'completed': return 'success';
      case 'in-progress': return 'warn';
      case 'pending': return 'info';
      default: return 'secondary';
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

  navigateToDetail(visit: Visit) {
    // Navegar a la página de detalle con el ID de la visita
    this.router.navigate(['/tabs/tab2/detail', visit.id], {
      state: { visit }
    });
  }

}
