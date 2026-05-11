import 'package:flutter/material.dart';

class HomeHero extends StatelessWidget
{
  // VARIABLES
  final String name;
  // CONSTRUCTEUR
  const HomeHero({super.key, required this.name});
  @override
  Widget build(BuildContext context)
  {
    return Column(
      crossAxisAlignment : CrossAxisAlignment.start,
        children: [
          Text(
            'Hello $name!',
            style : const TextStyle(
              fontSize : 28,
              fontWeight: FontWeight.w700,
              color : Color(0xFF1A1040),
            ),
          ),
          const SizedBox(height : 6),
          const Text(
            'Que souhaitons-nous faire aujourd\'hui ?',
            style : TextStyle(
              fontSize : 16,
              color: Color (0xFF6B6584),
            ),
          ),
        ],
    );
  }
}