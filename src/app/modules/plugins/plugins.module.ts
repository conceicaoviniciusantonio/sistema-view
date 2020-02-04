import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatStepperModule, MatSnackBarModule, MatButtonModule, MatIconModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatProgressSpinnerModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatListModule, MatExpansionModule, MatDividerModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DebounceDirective } from './plugins/debounce/debounce.directive';

@NgModule({
  declarations: [DebounceDirective],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatSortModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatStepperModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    FlexLayoutModule,
    DebounceDirective,
    BrowserAnimationsModule,
    MatNativeDateModule,
    
  ]
})
export class PluginsModule { }
