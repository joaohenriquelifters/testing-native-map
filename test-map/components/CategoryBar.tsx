import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const categories = [
    { id: '1', name: 'Wait Times', icon: 'access-time', library: MaterialIcons, color: '#3B2A1E' },
    { id: '2', name: 'Dining', icon: 'restaurant', library: MaterialIcons, color: '#3B2A1E' },
    { id: '3', name: 'Attractions', icon: 'star', library: MaterialIcons, color: '#3B2A1E' },
    { id: '4', name: 'Entertainment', icon: 'magic', library: FontAwesome5, color: '#3B2A1E' },
    { id: '5', name: 'Restrooms', icon: 'wc', library: MaterialIcons, color: '#3B2A1E' },
];

export default function CategoryBar() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {categories.map((cat) => (
                        <TouchableOpacity key={cat.id} style={styles.categoryItem}>
                            <View style={styles.iconCircle}>
                                <cat.library name={cat.icon as any} size={28} color={cat.color} />
                            </View>
                            <Text style={[styles.categoryText, { color: cat.color === '#3B2A1E' ? '#3B2A1E' : '#333' }]}>{cat.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.filterRow}>
                    <TouchableOpacity style={styles.filterIconCircle}>
                        <Ionicons name="options-outline" size={20} color="#3B2A1E" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.locationButton}>
                        <Text style={styles.locationButtonText}>Locations</Text>
                        <Ionicons name="chevron-down" size={16} color="#3B2A1E" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.resetButton}>
                        <Text style={styles.resetButtonText}>Reset All Filters</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#F3E6D2',
    },
    container: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    scrollContent: {
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 20,
        width: 80,
    },
    iconCircle: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    categoryText: {
        fontSize: 11,
        fontWeight: '600',
        textAlign: 'center',
    },
    filterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 15,
        gap: 10,
    },
    filterIconCircle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#3B2A1E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    locationButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3B2A1E',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        gap: 5,
    },
    locationButtonText: {
        color: '#3B2A1E',
        fontSize: 14,
        fontWeight: '500',
    },
    resetButton: {
        marginLeft: 'auto',
    },
    resetButtonText: {
        color: '#3B2A1E',
        fontSize: 13,
        fontWeight: '500',
    },
});
